import app from "./src/app/index";

const PORT = 5000;

app.listen(PORT , () => {
    console.log(`Server is running in port = ${PORT}`);
});