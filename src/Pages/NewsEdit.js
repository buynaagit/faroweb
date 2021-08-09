import React, { useRef } from "react";

import axios from "axios";
import { URL } from "../utils/appConstant";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import ImageUploader from "react-images-upload";
import SpinLoader from "../components/Loader";
// import { ImgUploader } from "../components/ImgUploader";

export default function NewsEdit({ match }) {
  const history = useHistory();
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [blogs, setBlogs] = React.useState([]);

  console.log(`image[0]`, image[0]);
  const blogID = match.params.id;

  console.log(`blogID`, blogID);

  const Publish = (e) => {
    setLoading(true);
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    console.log(`button Pressed`);
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setDescription(editorRef.current.getContent());
    }

    var data = new FormData();
    data.append("title", title);
    data.append("category", category);
    data.append("description", editorRef.current.getContent());
    data.append("image", image[0]);

    return axios
      .put(`${URL}/api/blogs/${blogID}/update/`, data, config)
      .then(function (response) {
        console.log(`response`, response.data);
        history.push("/NewsDashboard");
        setLoading(false);
      })
      .catch(function (error) {
        console.log(`error`, error.response);
      });
  };

  const getBlogFromAPI = React.useCallback(
    (e) => {
      // e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(`button Pressed`);

      axios
        .get(`${URL}/api/blogs/${blogID}/`, config)
        .then(function (response) {
          console.log(`response`, response.data);
          setBlogs(response.data);
          localStorage.setItem("blogs", response.data);
        })
        .catch(function (error) {
          console.log(`error`, error.response);
        });
    },
    [blogID]
  );

  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  React.useEffect(() => {
    getBlogFromAPI();
  }, [getBlogFromAPI]);

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={blogs.description}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="form-group text_box">
        <p>Title</p>
        <input
          type="text"
          value={title}
          placeholder={blogs.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group text_box">
        <p>Category</p>
        <input
          type="text"
          value={category}
          placeholder={blogs.category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      {isLoading ? (
        <SpinLoader />
      ) : (
        <button disabled={isLoading} className="btn_three" onClick={Publish}>
          Шинэчлэх
        </button>
      )}
      {image ? (
        <p> Image updated! </p>
      ) : (
        <p>
          Cover image <br></br>
          <img src={blogs.cover_image} alt="" />
        </p>
      )}
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={setImage}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    </>
  );
}
