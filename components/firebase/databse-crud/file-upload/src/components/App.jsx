import React, { useEffect, useState } from "react";
import { storage } from "../firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [imgList, setImgList] = useState([]);

  const uploadFile = () => {
    if (fileUpload == null) return;
    const imageRef = ref(storage, `images/${fileUpload.name + v4()}`);
    uploadBytes(imageRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgList((prev) => [...prev, url])
      })
    });
  };

  const imgListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imgListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div>
      <input
        type="file"
        className="input-file"
        onChange={(e) => {
          setFileUpload(e.target.files[0]);
        }}
      />
      <button className="btn" onClick={uploadFile}>
        Upload File
      </button>
      </div>
      <div className="container">
      {imgList && imgList.map((url) => {
        return <img src={url} key={url}/>
      })}
      </div>
    </div>
  );
}

export default App;
