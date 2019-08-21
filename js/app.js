
Vue.component('devicon',{
    props:["icon", "size", "width"],
    template:`
    <div v-bind:class="'border m-1 icon-' + size + ' ' + width">

        <div v-if="icon === 'csharp'">
            <i class="devicon-csharp-plain-wordmark colored"></i>
        </div>
        <div v-else-if="icon === 'cplusplus'">
            <i class="devicon-cplusplus-plain colored"></i>
        </div>
        <div v-else-if="icon === 'c'">
            <i class="devicon-c-plain colored"></i> 
        </div>
        <div v-else-if="icon === 'css3'">
            <i class="devicon-css3-plain-wordmark colored"></i> 
        </div>  
        <div v-else-if="icon === 'docker'">
            <i class="devicon-docker-plain-wordmark colored"></i>
        </div>    
            <div v-else-if="icon === 'git'">
            <i class="devicon-git-plain-wordmark colored"></i> 
        </div>  
        <div v-else-if="icon === 'android'">
            <i class="devicon-android-plain colored"></i> 
        </div>    
        <div v-else-if="icon === 'apache'">
            <i class="devicon-apache-plain colored"></i>
        </div>   
        <div v-else-if="icon === 'intellij'">
            <i class="devicon-intellij-plain-wordmark colored"></i> 
        </div>   
        <div v-else-if="icon === 'java'">
            <i class="devicon-java-plain-wordmark colored"></i>
        </div>   
        <div v-else-if="icon === 'javascript'">
            <i class="devicon-javascript-plain colored"></i> 
        </div>     
        <div v-else-if="icon === 'laravel'">
            <i class="devicon-laravel-plain-wordmark colored"></i>
        </div>   
        <div v-else-if="icon === 'linux'">
            <i class="devicon-linux-plain colored"></i>
        </div>   
        <div v-else-if="icon === 'nodejs'">
            <i class="devicon-nodejs-plain-wordmark colored"></i>
        </div>   
        <div v-else-if="icon === 'nginx'">
            <i class="devicon-nginx-original-wordmark colored"></i>
        </div>  
        <div v-else-if="icon === 'php'">
            <i class="devicon-php-plain colored"></i>
        </div>   
        <div v-else-if="icon === 'oracle'">
            <i class="devicon-oracle-original colored"></i> 
        </div>    
        <div v-else-if="icon === 'python'">
            <i class="devicon-python-plain-wordmark colored"></i>
        </div>    
        <div v-else-if="icon === 'visualstudio'">
            <i class="devicon-visualstudio-plain-wordmark colored"></i>
        </div>   
        <div v-else-if="icon === 'vuejs'">
            <i class="devicon-vuejs-plain-wordmark colored"></i> 
        </div>     
        <div v-else-if="icon === 'webpack'">
            <i class="devicon-webpack-plain-wordmark colored"></i>
        </div>       
        <div v-else-if="icon === 'apple'">
            <i class="devicon-apple-original colored"></i>

        </div> 
        <div v-else-if="icon === 'yarn'">
            <div class="">
                <i><svg id="Yarn" xmlns="http://www.w3.org/2000/svg" viewBox="10 10 128 128" style="fill:#2c8ebb;"><defs><style>.cls-1{fill:#2c8ebb;}</style></defs><title>Artboard 5</title><g id="original-wordmark"><path class="cls-1" d="M79,63.87a16.8,16.8,0,0,1-3.73,6.75V55.72A2,2,0,0,0,73,53.86c-.59,0-1.1.3-1.1.72A9.14,9.14,0,0,1,72,55.94v6.83c-.51,3-1.78,5.73-3.48,5.73-1.23,0-2-1.23-2-3.52a30.76,30.76,0,0,1,1.23-8.57c.17-.64,1.4-2.33-.68-2.33-2.25,0-2,.85-2.25,1.57a41.45,41.45,0,0,0-1.42,9.55c0,3.69,1.55,6.11,4.39,6.11,1.82,0,3.14-1.23,4.16-2.93v5.39c-2.8,2.46-5.26,4.63-5.26,8.91,0,2.72,1.7,4.88,4.07,4.88,2.16,0,4.41-1.57,4.41-6V74.19a18.42,18.42,0,0,0,6.2-9.42,2,2,0,0,0,0-.42A1.87,1.87,0,0,0,80,62.6c-.42,0-.76.38-1,1.27Zm-8.15,21c-.68,0-1.1-1-1.1-2.33A7.41,7.41,0,0,1,72,77v4.54c0,.81.17,3.35-1.19,3.35Z"/><path class="cls-1" d="M91.16,68.46c-1,0-1.44-1-1.44-2v-7a2,2,0,0,0-2.29-1.87c-.59,0-1.1.3-1.1.72a9.14,9.14,0,0,1,.17,1.36v6.54c-.47,1.19-1.23,2.21-2.38,2.21-1.49,0-2.42-1.27-2.42-3.48,0-6.11,3.78-8.87,7-8.87.42,0,.85.08,1.23.08s.55-.25.55-1a1.76,1.76,0,0,0-2-1.78c-5.18,0-10.1,4.33-10.1,11.42,0,3.61,1.74,6.41,5.05,6.41a4.72,4.72,0,0,0,3.65-1.74,3.75,3.75,0,0,0,3.27,1.74c3.65,0,5.35-3.82,6.07-6.62a1.12,1.12,0,0,0,0-.3A1.87,1.87,0,0,0,95,62.6c-.42,0-.85.38-1,1.27-.38,1.87-1.15,4.58-2.84,4.58Z"/><path class="cls-1" d="M103.43,71.26c3.65,0,5.31-3.82,6.07-6.62,0-.08,0-.17,0-.3a1.87,1.87,0,0,0-1.49-1.74c-.42,0-.85.38-1,1.27-.38,1.87-1.1,4.58-3.06,4.58-1.15,0-1.7-1.1-1.7-2.29,0-4.24,1.91-9.25,1.91-9.76.17-1-1.53-2.38-2-2.38H99.95a15.82,15.82,0,0,1-2.25-.17A2.69,2.69,0,0,0,95,51.61a2,2,0,0,0-2.12,2,3.12,3.12,0,0,0,1.82,2.72A39.41,39.41,0,0,1,94,63.66c-.38,1.44,1.82,3,2.38,1.19A34,34,0,0,0,97.49,57h3.69a27.53,27.53,0,0,0-2.12,9.38c0,3.73,2.38,4.84,4.37,4.84Z"/><path class="cls-1" d="M107.21,69.39a1.78,1.78,0,0,0,2,1.87c1.23,0,1.19-1,1.19-1.82v-6.2c.3-3.35,2.93-7,4.16-7,.81,0,.89,1.1.89,2.42v8.62c0,2.16,1.32,4,3.57,4,3.65,0,5.45-3.82,6.18-6.62a1.12,1.12,0,0,0,0-.3,1.87,1.87,0,0,0-1.49-1.74c-.42,0-.85.38-1,1.27-.38,1.87-1.25,4.58-2.95,4.58-1.1,0-1.1-1.57-1.1-2V57.72c0-2-.68-4.29-3.52-4.29-2.08,0-3.61,1.82-4.75,4.2V55.72a2,2,0,0,0-2.29-1.87c-.59,0-1.1.3-1.1.72a9.14,9.14,0,0,1,.17,1.36V69.39Zm-77,22.09M57.7,64"/><g id="icon"><path class="cls-1" d="M45.35,71.28a9.82,9.82,0,0,0-4.94,1.86c-2.62,1.62-3.92,1.51-3.92,1.51l0-.07c-.18-.29.83-2.91-.3-6-1.23-3.41-3.18-4.23-3-4.49a16.2,16.2,0,0,0,3-6.25c.4-2,.29-5.35-.6-7.09-.17-.32-1.65.54-1.65.54a21.21,21.21,0,0,0-1.77-3.34c-1.25-.8-2.61,3.32-2.61,3.32a6.09,6.09,0,0,0-5.1,2,4.2,4.2,0,0,1-1.68,1c-.18.06-.4.05-.94,1.51-.83,2.23,1.41,4.71,1.41,4.71a12.07,12.07,0,0,0-3.66,4.23,10.79,10.79,0,0,0-.76,5.09s-1.9,1.65-2,3.35a5.6,5.6,0,0,0,.77,3.41.84.84,0,0,0,1.15.4s-1.26,1.47-.08,2.1,2.89.89,3.85-.08c.7-.7.83-2.25,1.09-2.89.06-.15.27.25.47.45a4.35,4.35,0,0,0,.59.44,1.82,1.82,0,0,0-1,2.4c.23.55,1.05.91,2.4.9a71.93,71.93,0,0,0,7.45-.67,1.89,1.89,0,0,0,1.14-.64,27.45,27.45,0,0,0,6.74-3.05,12.13,12.13,0,0,1,4.58-2.11A1.25,1.25,0,0,0,45.35,71.28Z"/><path class="cls-1" d="M30,37A27,27,0,1,0,57,64,27,27,0,0,0,30,37ZM46.24,75.25a10.83,10.83,0,0,0-4.1,1.9,29.18,29.18,0,0,1-6.78,3.13,3.79,3.79,0,0,1-1.58.77,68.25,68.25,0,0,1-7.8.71h-.1a4.26,4.26,0,0,1-3.26-1.11,5.45,5.45,0,0,1-4.77-.3,2.42,2.42,0,0,1-1.29-1.7,2.6,2.6,0,0,1,0-.9,2.9,2.9,0,0,1-.34-.44,7.14,7.14,0,0,1-1-4.38,6.85,6.85,0,0,1,2-3.85A12.44,12.44,0,0,1,18.07,64a11.68,11.68,0,0,1,3-3.91,5.82,5.82,0,0,1-.74-5c.51-1.36.93-2.11,1.85-2.43h0a3,3,0,0,0,1.09-.58,7.69,7.69,0,0,1,5.17-2.48c.08-.21.18-.42.28-.64A4.6,4.6,0,0,1,31,46.37a2.13,2.13,0,0,1,1.92.22c.28.19.65.42,1.7,2.6a2,2,0,0,1,1.24,0,1.66,1.66,0,0,1,1,.84c1.07,2.06,1.22,5.74.75,8.11a14.72,14.72,0,0,1-2.54,5.8A11.21,11.21,0,0,1,37.61,68a11.07,11.07,0,0,1,.62,4.53,12.5,12.5,0,0,0,1.36-.74,11.36,11.36,0,0,1,5.74-2.1,2.88,2.88,0,0,1,3,2.48A2.77,2.77,0,0,1,46.24,75.25Z"/></g></g></svg></i>
            </div> 

        </div> 
        <div v-else-if="icon === 'npm'">
            <svg id="NPM"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="fill:#cb3837;"><defs><style>.cls-1{fill:#cb3837;}</style></defs><title>Artboard 5</title><path id="original-wordmark" class="cls-1" d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"/></svg>
        </div> 

    </div>
    `
});

Vue.component('v-job-item',{
    props:['position', 'company', 'date'],
    template:`<div class="py-3 w-2/3">
                <div class="heading font-bold text-blue-900">{{position}}</div>
                <div class="heading font-light">{{company}}</div>
                <div class="heading font-normal text-gray-800 pl-3">{{date}}</div>
                <div class="text-gray-900 bodytext pt-1 pb-2 "><slot><slot></div>
            </div>`
});

Vue.component('v-item-education',{
    props:['school', 'degree', 'gpa', 'year'],
    template:`<div class="py-4">
                <div class="heading font-bold">{{degree}}</div>
                <div class="heading font-light">{{school}}</div>
                <div class="bodytext font-normal">{{year}}</div>
                <div class="bodytext font-medium pl-4"><i>{{gpa}}</i></div>
            </div>`
});

Vue.component('v-list-item',{
    props:['heading', 'body'],
    template:`<div>
                <div class="heading font-bold">{{heading}}</div>
                <div class="text-gray-900 bodytext pt-1 pb-2"><slot><slot></div>
            </div>`
});

Vue.component('v-column-item',{
    props:['heading', 'body', 'image'],
    template:`
             <div class="flex flex-col text-center w-1/4 mx-6 px-1">
                <div class="heading font-bold">{{heading}}</div>
                <div class="text-gray-900 bodytext pt-1 pb-2 text-left"><slot><slot></div>
            </div>`
});


var v = new Vue({
    el:'#root'
});