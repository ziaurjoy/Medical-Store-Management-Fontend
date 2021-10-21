

export default class Config{
    static Login = 'http://localhost:8000/create/token/';
    static companyUrl = "http://localhost:8000/company/list/";
    static medicineUrl = "http://localhost:8000/medicine/list/";
    static homeUrl = '/home';
    static logOutUrl = '/logout';
    static companySidebarNav = [
        // {"index":'0', 'title':"Home", "url": "/home", "icons":"fas fa-home"},
        {"index":'0', 'title':"Create New Company", "url": "/company/add", "icons":"far fa-building", "ref":"this.divref"},
        {"index":'1', 'title':" Company List", "url": "/company/list", "icons":" fas fa-capsules ", "ref":"this.divref2"},
    ]
}