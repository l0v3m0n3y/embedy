class embedy{
    constructor(){
        this.api = "https://embedy.cc"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
    }
    async lost_password(email){
        let req=await fetch(`${this.api}/lostpassword/`,{method:"POST",headers: this.headers,body:`lostname=${email}&action=submit`});
        return req.json();
    }
    async register(name,email,password){
        let req=await fetch(`${this.api}/register/`,{method:"POST",headers: this.headers,body:`name=${name}&pas1=${password}&pas2=${password}&mail=${email}&action=submit`});
        this.headers["cookie"]=req.headers.get("set-cookie")
        return req.json();
    }
    async login(login,password){
        let req=await fetch(`${this.api}/login/`,{method:"POST",headers: this.headers,body:`name=${name}&pass=${password}&action=submit`});
        this.headers["cookie"]=req.headers.get("set-cookie")
        return req.json();
    }
    async like(act,id){
        let req=await fetch(`${this.api}/like/`,{method:"POST",headers: this.headers,body:`act=${act}&id=${id}`});
        return req.json();
    }
    async fav(act,id){
        let req=await fetch(`${this.api}/fav/`,{method:"POST",headers: this.headers,body:`act=${act}&id=${id}`});
        return req.json();
    }
    async playlist(act,id){
        let req=await fetch(`${this.api}/playlist/`,{method:"POST",headers: this.headers,body:`act=${act}&id=${id}`});
        return req.json();
    }
    async get_video(id,quality){
        let req=await fetch(`${this.api}/video.get/`,{method:"POST",headers: this.headers,body:`video=${id}=&quality=${quality}`});
        return req.json();
    }
}
module.exports = {embedy};