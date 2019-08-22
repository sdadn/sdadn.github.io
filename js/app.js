
Vue.component('devicon',{
    props:["icon", "size", "width", "height"],
    template:`
    <div>
 <!-- <div v-bind:class="'border m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height"> -->
        <div v-if="     icon === 'android'"     v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${android}</div>
        <div v-else-if="icon === 'apple'"       v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${apple} </div>  
        <div v-else-if="icon === 'csharp'"      v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${csharp}</div>
        <div v-else-if="icon === 'cplusplus'"   v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${cplusplus}</div> 
        <div v-else-if="icon === 'c'"           v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${c}</div>
        <div v-else-if="icon === 'css3'"        v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${css3}</div>
        <div v-else-if="icon === 'docker'"      v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${docker}</div>
        <div v-else-if="icon === 'git'"         v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${git}</div>
        <div v-else-if="icon === 'html5'"       v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${html5}</div>
        <div v-else-if="icon === 'intellij'"    v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${intellij}</div>
        <div v-else-if="icon === 'java'"        v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${java}</div>
        <div v-else-if="icon === 'javascript'"  v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${javascript}</div>
        <div v-else-if="icon === 'laravel'"     v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${laravel}</div>          
        <div v-else-if="icon === 'linux'"       v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${linux}</div>
        <div v-else-if="icon === 'nginx'"       v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${nginx}</div>
        <div v-else-if="icon === 'nodejs'"      v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${nodejs}</div>
        <div v-else-if="icon === 'npm'"         v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${npm}</div>
        <div v-else-if="icon === 'mysql'"       v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${mysql}</div>          
        <div v-else-if="icon === 'oracle'"      v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${oracle}</div>
        <div v-else-if="icon === 'php'"         v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${php}</div>
        <div v-else-if="icon === 'python'"      v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${python}</div>
        <div v-else-if="icon === 'visualstudio'"v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${visualstudio}</div>
        <div v-else-if="icon === 'vuejs'"       v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${vuejs}</div>
        <div v-else-if="icon === 'webpack'"     v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${webpack}</div>
        <div v-else-if="icon === 'windows'"     v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${windows}</div>
        <div v-else-if="icon === 'yarn'"        v-bind:class="' m-1 p-1 icon-' + size + ' w-' + width + ' h-' + height">${yarn}</div>

    </div>
    `
});

Vue.component('v-skill-section',{
    props:['section'],
    template:`     
             <div class="flex flex-col justify-start mt-4">
            <span>{{section}}</span>
            
            <div class="flex flex-wrap justify-center items-center">
                <slot></slot>
            </div>
        </div>`
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