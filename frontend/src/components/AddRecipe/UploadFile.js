export function uploadFileFunction() {
  const handleUploadFile = e => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append('sendimage', files[0]);
    // console.log(formData)
    // fetch(`http://localhost:83/recipes_food/backend/api/upload.php`, {
    //   mode: "no-cors",
    //   method: "POST",
    //   body: formData
    // })
    //   .then(res => res)
    //   .then(result => console.log(result));
  }
  return (
    <form>
      <h1>Upload file</h1>
      <input onChange={e => handleUploadFile(e)} type="file" name="sendimage" />
    </form>
  );
}