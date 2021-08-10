import React, { useRef } from "react";

import axios from "axios";
import { URL } from "../utils/appConstant";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import ImageUploader from "react-images-upload";
import SpinLoader from "../components/Loader";
import DropDownCategory from "../components/dropdownCategory";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function NewsPublish() {
  const history = useHistory();
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");

  const Publish = (e) => {
    if (category == "Select Category" || category == "") {
      alert("Mэдээний төрөлөө сонгоно уу.");
      console.log(`Please choose category`);
    }
    if (title == "") {
      alert("Mэдээний гариг сонгон уу.");
      console.log(`Please enter a title`);
    } else {
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
        .post(`${URL}/api/blogs/create/`, data, config)
        .then(function (response) {
          history.push("/NewsDashboard");
          console.log(`response`, response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(`error`, error.response);
        });
    }
  };

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
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
        <input
          type="text"
          value={title}
          placeholder="Enter a title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <DropDownCategory setCategory={setCategory} />
      {isLoading ? (
        <SpinLoader />
      ) : (
        <button disabled={isLoading} className="btn_three" onClick={Publish}>
          Нийтлэх
        </button>
      )}
      {image ? <p> Image uploaded </p> : <p> Upload Image...</p>}
      <ImageUploader
        withIcon={true}
        buttonText="Зураг ороуулах"
        onChange={setImage}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    </>
  );
}
