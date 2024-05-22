const URL="https://api.openweathermap.org/data/2.5/weather?q=";

const apikey="&appid=9049190123ff0e909e7f92a059ac2c2e"

const form=document.getElementById("form");
const div1=document.getElementById("temp")
const humid=document.createElement('humid')
const wspeed=document.createElement('wspeed')
const press=document.createElement('press')
const div=document.getElementById("container");

function removeElement(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}

function getWeather(searchtext){

    axios.get(`${URL}${searchtext}${apikey}`).then((res)=>{
        const weather=res.data
        console.log(weather)
        //const di=document.createElement("div");
        const h2=document.createElement('h2');
        const h4=document.createElement('h4');
        var img=document.createElement('img')
        const a=document.createElement('h4')

        h2.append(weather.name)
        div1.append(h2)
        if(weather.weather[0].description==="light rain"){
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkhl4kCe7T0qSu04ZFvHfvZxEp97Z08id7zWoy0t3nBYEzoizQ1AkvLfFtdT3gsxAeVE&usqp=CAU";
            div1.appendChild(img)
            div1.append(img)
            a.append(weather.weather[0].description)
            div1.append(a)
            //div1.append(image)
        }
        else if(weather.weather[0].description==="clear sky"){
            img.src="data:image/png;base64,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";
            div1.appendChild(img)
            div1.append(img)
            a.append(weather.weather[0].description)
            div1.append(a)
            //div1.append(image)
        }
        else if(weather.weather[0].description==="haze"){
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXDVPVbHfc5F_m0IjJnMTdUQ0I40JVR02WEXdIOjWrzZGdIhikSUM2uG2XsvqOp76zoU&usqp=CAU";
            div1.appendChild(img)
            div1.append(img)
            a.append(weather.weather[0].description)
            div1.append(a)
            //div1.append(image)
        }
        else if(weather.weather[0].description==="overcast clouds" || weather.weather[0].description==="broken clouds"){
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVa0L8t91QYyx_SD_8BS3GFM1KedH7406nVsfmYjKKb78Qz34vchNeljF0KLPk6wmM80&usqp=CAU"
            div1.appendChild(img)
            div1.append(img)
            a.append(weather.weather[0].description)
            div1.append(a)
        }
        else if(weather.weather[0].description==="moderate rain"){
            img.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX////f8P5HiMc3gMOyyeTX6vpDhsY/hMU1gMTj8/8+g8Xm9f8yfsPK2u290eiVt9xQjsrz9/umwuHi6/Velc3s8vl5pdSHrti00e1Xkcvb5vNjmM7F3fTC1erR3+/n7/ecv+N+q9iKs93O5PdrndCpyei40+5zo9WXuNyfwuTR5vmwx+NvFcgyAAAMSUlEQVR4nO1d7XaqOhCtpCYhoIK1Kn5rUdue93+/AzMB0UJUDAFZ7j93reuxstmZSSaZmby9vfDCCy88K/z1bNWLsJqt/bqfRTdm/UEYMJdzTmJw7lrzyXC5rvu5tMDvfY8iYoxaZ6CUCcLZeDir+wEfg/8e/iWX5ckEtya9uh+zNHpHVxSzS1kKQgYfdT9rCfhDi7MLvYQAMxSCMUqz3BmfP5uQ6wE/yUcZIyIId5v99LBYLA7T6X6znVtEZMYv5d573Q99Bz63J/miQeht94uO7Th2Bo7T+T1sjuxkpZRY/+p+8FsR6ZfwEyT8+Yq5dXIQ8ewcdl5KkhLvKcbqkib8GAl+uk4uuRNLx17srHRE82Pj1wL+mNOE33hxhV5CsjMdkeRbol83BTV6QgrI2O6afGckF6HkSJst48CVj+luu86t9BKOcyJfDm3sOscfCekxwq/7+CHHgye/7w7rppKPGcMpgtLp7ePzjKO9k0OVb+smk4elHKHk2CnFL4azCFBGMa+bzl+8u3KE7u8foOcyIkWvaf5miASZV8ICz2Wc4khl3mfdnM7wDwmKB0ZoSvHLA3umVpNU7CNBsntQQIDdHSFFr25aJ/QkwY0OgjHHEPwNG9VNLMEMF2r8RxPBlKIY100N4RPdBGOKMFD5pm5ygDnTOkQlxTm8NrcJ4dRO6HMyWXgUptf65wz0Muyom6D9BYExq31x40PwSgPN/GKKBxdHf80Mx2CE4uvhif4vnAGMf7fenfEeh/f80Fq0EOhtaL2zogXPoN0IJX7RidUZLQ4FxIPdagh2nB8INHh9C1RfjtEKjFBSHIE/3dXGcBe7GTqvaIxGsBfwDnldzuYT3XkVfjSBs41fIqtrU2MAEm6rk7CTOJuaZgwf3UBVbgbhgCWwQS0MwZGySaUSpjNGLe4UTgDJV7UEI0uMf0bUcfQGyxk2rljCaAUOxhDUwBBWpORQoSNFOLB24+Z3+tHPeFVLGIm4B3v/Ns6wHzMUm8oljBAbPLWMM8RBWrWfieFM6hmmLgQ21Q/SOBSG4WI6wliBJzUySDs2RDCmtzM28a+ShRGGDliEiH7V/1iteqvVzMT8H7twSo0Q7Ng/4E23c+pC6l+c+Bd+LyvehYs3wvRvsBUAJ32WSaOilBHXG1ZI8oMbmytiWPnpcYKPK/OwfWFmQYNwjkUJgIwHq2oYfoPtVxs4nWBv8OybMcj9E4ydcgIpP1YyVmPvRi1DZtixFyROuA3GmPt32G/GAUnzqJhbRT5cUPEGzSV4ODh07VPun2P/7o8iUZIf9TNE922Oof03+c92uj+ezE5hlu5tDggs2M6UKy2Cbe+tJElJs1P9hMnip26GEcfOjldCEaZDVt1O8B1wFjJ1w9WaKz4DDadNYBjJGMqRqnPWaBLDeMcRVnVas1M+GsUwoSgmuhk2wg4BzgS3xvXlNayb42kQmJ2icTPn09w21K2A8EPo2/0XjZjxM8DNHMvV4097E8x1qfrI4i7oO4dbbYlc1hsL8W+EnnO4fpCp9zEYW9wAB4LIB8/h/glyCq8pM7Clfxcgicp9RL9T8Y4VxaOjgalNjBuBh6lkWZbfxzwp96GMBLtpt6Bcqz5gWgMrm5M6TPkJa7ewyxVUVAwHdh5oKX5+KA2Qkvm0mfQi2JA6UeoIZ5XsbZH5oan0OrBhZZU7EE+qYZjXZH4RujDp3x9hyGIRiwya5lsuAYZo0XDQvyve/+ZSwEXDpr+/wJWbrPK/edaQBMm46QJ24r3x04KLEXd804b/EAlyvZn4FcGepiXWMOx4cF3IJdogryYJWDsWrhDZXgaUX6sO/0AFxfQ5CEYUp5vtnJJMswoeKr2O/EdPQ7ADvQzsr/0kOFX5u4pUHEzEJzrLfcwAqvzTvgAiKIr8lzBGhfZqGCOwnc7ek6OVknxrxIot1qw49x5kDm7yq8Nh+qwuEd8E7M5OLsh4Tuy/wizuxmxsl0NycGPxvwn/UAhAK88frRp250jkouWCINb7GEtGqBDOACleHvdD3qp4isXaNTh7XLi4Z+vUGeQeenU/nB44ezx+Y9l8OHCkTTjH1gJJkYXZuRD+T0sIxjuNMDHykym+49FLG6wQ4YRYcJ6u3+ZGaimMAo7f0t1UH/xM2B4J0+O3ZK8RUg9b42cQuIlDw4wn5b91P5RedCH4l5MinIAGbRqknfT4DSwRkrra5EklROpOV7A73qBUCz3AAn8o3IDZsF1zBQBrGePUKeD61KFvPpxj7EHjFL9x7GiadoatAbhjLP7JcpFWzfcJhJwSPctsjrMxwOo0PiWGuKJJGU+6gGUNfN1ihrA4Jb32MsT5IpoRYzusuFdCTbDjGIoN2utpZELKGLZK2zlbYI3Y/A3+Y6TG1zSgHJUGbxOo22qjp8G6cO9tCHkp7VuXJgwt7CZgqIzZLHArw5MFI62LDzsyuojsEEvT2jhdOBhUyAJKYyWiBuHAjD+RHaB4+4J8mdv3/fa2bF7FiBbI/Mx+sufdvjkfuzPAvnfYvnOLGLhRA221Wnf2hLChmc/odH4o6n4izZBmiFlgk1adAUtgRQZfZc7xrbqfSTNgkDJ5hAi+hrUiFyOB7BqWZEetWpNPk8LxsmekUsTnz4k6wZ4S66wt8Qzz2hpWvvUAbKhV4JnUb3CntDWBMB6QWtmifewS/MT5pefAozV+dmFW/5lzhC8hm4Nf9NCUed5PUoqgRNLg/bKwTd5v9Dy5+kVAPxqNxwuCuGHTAor2Qua0XxJMr8h5lpqZAti/lnU+2Wcg654030BiFvYXFgrx/J5gz1S7lg9HEiy8l+eJ6g9zIbNnz9JnLykmNaS7J5TRtreSoKqb9L+0Dvi2azcbBOcgyy2E+h6QXtLdjoRPxdH5lQJGD64kGC1R52k9/vHwJGPVdrqT5P5W94Z+IEM3vSLW2/w2rmPEJeLyvHEy8ii/6X7aWZC8EEuQ+ebQxTua66byB1Bj2Z1OPJJUPZP5rT1r3llaRxzfhx5sN9PF4qvbKPwuFtOfbab1ZzTm7uj96X/z7G3wTF6V3jCItOln/Izu5M7OUUOLZzg2HFTwe/nFWIY8+5IaC8oI+S7Z+cvvH0mzWWLbiMca8M3eJx4jPBr0TQPhXHiTdz2tPj8/ev3+e7PQX67WTbqD9oUXXnjhhRdeeKFp+FAs5D8UCynlZ4q/uTZ866MfuIX9mFaMu0VtxdYWz++OE//NkVu8hRS6rtm75eML1t2CDnCCWpQXqBFvZ/451JMIFX8zblFecA5RDeD+cZEvItx1yfOjNThmFvlPulL8zXX8WelmrGUA7Xp4/lCEvZ2CHs1QNM7zdcL8yPyNQJmUVu5hywDa9RTcTTAUxa+7f5HhksUK885yP5P39BoMBFHC/NeNEubH3JiklD+AsTVHfrvViYbG1ncBOy6VkJArJOTFEq7xpmeDEgbXJOSaJQQrNCjhsqyEYIX553oqCdEKTUqIUuQ7UnbNCgtu3RhddaSmJSyQogor/DRuhSprIiWt8KqEJh1paQkVVqhyzuYlhP5LBVKorBC+9wxWqFqWlF3O9K46UpPLGaUVWuWsUDW/GrfCSiR0i60QlzOuaSsssKarVqhypAXzq3ErfAcp8q9bLiuhaolk3gqtTIOwS5RdkaqWSMatECXMzzcqu5xRza/mgwpLEaIrV6QKKwyaZIX/FJeeP2SFBRKat0JaVsJHrNC8hHqtsK+S0LgVYqfF/M3Oxxxp/mfGJRyWlVARVKjkNR/ao0z5EjLVHqlKQoWTrUdCln8jdmkrVMhrXEJf5SzLBhWq1SpKqLiNQzdKS6iyQsUq17wj5cUyKeVVBSOqUwzjVrhRyFR2OfOu+AwlFAatUHUaoZD3BitUSGgyqPgGmfIvbn1MQpUVGgztfZVMtGRoHyhiTeNWqJLQVxzPqiSEN1MkoemgwldevTtnFi0RVLyNRfS9hlghdo0uuknxc+TS/J1A1XLmLU6vYPmnacbnQmxeo7g9uehRVKtO1feMW+Gg5GWYSitUAK3Q5FyIY+b+WgalFSpgXMJdWQnVVlgI41ZYevJ9TEKDQQV67r93fF2DKqhQwXhcWHryfTIrvP8Hl89ihVKK+38Qm03eL2GPGLZCSLgqM2ZiT1rCCiELkZo8L3zzA+7eP9be4jUZF2XSeocucW+qVNaH1U1XJf/FrGRB4LpXslDyhRdeeKFO/AehuRIblScISAAAAABJRU5ErkJggg=="
            div1.appendChild(img)
            div1.append(img)
            a.append(weather.weather[0].description)
            div1.append(a)
        }
        else{
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdZgNy2MUtVgmn_xJIr3eq7ZMdfy5VLVZWt1Aiu-s0DuAgbZ38YYT5XS6VTKEbbT5meI&usqp=CAU";
            div1.appendChild(img)
            div1.append(img)
            a.append(weather.weather[0].description)
            div1.append(a)
            //div1.append(image)
        }
        h4.append(weather.main.temp)
        h4.append("°k")
        div1.append(h4)
        const h4wspeed=document.createElement('h4')
        const imgwpseed=document.createElement('img')
        h4wspeed.append("Wind Speed: ");
        h4wspeed.append(weather.wind.speed);
        imgwpseed.src='https://www.citypng.com/public/uploads/preview/download-wind-blue-icon-png-11637144702itck1srdfm.png'
        wspeed.appendChild(imgwpseed)
        wspeed.append(imgwpseed)
        wspeed.append(h4wspeed)
        div.append(wspeed)
        const h4press=document.createElement('h4')
        const imgpress=document.createElement('img')
        h4press.append("Pressure: ");
        h4press.append(weather.main.pressure);
        imgpress.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSUPbmPTLAnLtTE44ogFYtqP6__8eOlzwlQ&s'
        press.appendChild(imgpress)
        press.append(imgpress)
        press.append(h4press)
        div.append(press)
        const h4humid=document.createElement('h4')
        const imghumid=document.createElement('img')
        imghumid.src="data:image/png;base64,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"
        humid.appendChild(imghumid)
        humid.append(imghumid)
        h4humid.append("Humidity: ");
        h4humid.append(weather.main.humidity)
        humid.append(h4humid)
        div.append(humid)
    })

}

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    //console.log(form.children)
    const searchtext=form.children[3].value;
    removeElement(div);
    removeElement(wspeed)
    removeElement(humid)
    removeElement(press)
    removeElement(div1)
    getWeather(searchtext);
    form.children[3].value="";

})