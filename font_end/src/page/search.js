import Header from "../conponent/header"

const SearchPage={
    async render(){
        return `
        ${await Header.render()}
        `
    },
    async afterRender(){
        var search = document.forms['form-search']['search'].value
    }
}
export default SearchPage