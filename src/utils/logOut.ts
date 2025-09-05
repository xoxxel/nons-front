"use client"

const LogOut = ()=> {
    document.cookie = 'access=; Max-Age=-99999999;';
}

export default LogOut