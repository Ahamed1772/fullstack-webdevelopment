const page = async() => {
    await new Promise ((resolve) => setTimeout(() => {
        resolve("content Loading")
    },4000));
  return (
    <div>User</div>
  )
}

export default page