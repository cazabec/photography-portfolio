export const onInitialClientRender = () => {
    setTimeout(() => {
        document.getElementById('___loader').style.display = "none";
    }, 1000);
}