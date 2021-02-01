<template>
   <div class="container">
        <div class="leftPanel">
            <img class="computer" src="../assets/1.png" alt="电脑图">
            <img class="phone" src="../assets/2.png" alt="手机图">
        </div>
        <div class="rightPanel">
            <h1 color="FF5300">淘沙年报</h1>
            <h3>为您在线生成定制年报</h3>
            <button class="btn a" @click='ToDetail()'>现在开始</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Start',
    methods: {
        ToDetail() {
            // var target = e.target;
            // if (target.className.toLowerCase() !== 'btn') return false;
            // var rect = target.getBoundingClientRect();
            // var ripple = target.querySelector('.ripple');
            // if (!ripple) {
            //     ripple = document.createElement('span');
            //     ripple.className = 'ripple'
            //     ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
            //     target.appendChild(ripple);
            // }
            // ripple.classList.remove('show');
            // var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
            // var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
            // ripple.style.top = top + 'px';
            // ripple.style.left = left + 'px';
            // ripple.classList.add('show');

            this.$router.push('/home')
        },

    }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: #e7e6e6;
    }
    
    *::after,
    *::before {
        box-sizing: boder-box;
    }
    
    a {
        text-underline-offset: none;
    }
    
    .container {
        display: flex;
    }
    
    .leftPanel {
        width: 50%;
        min-height: 500px;
    }
    
    .computer {
        position: absolute;
        top: 100px;
        left: 200px;
        width: 400px;
        height: 300px;
    }
    
    .phone {
        position: absolute;
        top: 235px;
        left: 630px;
        width: 65px;
        height: 150px;
    }
    
    .rightPanel {
        position: relative;
        top: 35px;
        width: 50%;
        text-align: center;
        right: 30;
    }
    
    .rightPanel>h1 {
        color: #FF5300;
        padding: 60px;
    }
    
    .rightPanel>h3 {
        color: #FF8600;
        margin-bottom: 48px;
    }
    
    .btn {
        position: relative;
        width: 8em;
        height: 3em;
        margin: 2em;
        border: 6px solid #FF8600;
        outline: none;
        letter-spacing: .2em;
        font-weight: bold;
        cursor: pointer;
        overflow: hidden;
        user-select: none;
        border-radius: 11px;
        color: #FE5605;
    }
    
    .ripple {
        position: absolute;
        background: rgba(0, 0, 0, .15);
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }
    
    .ripple.show {
        animation: ripple .75s ease-out;
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
</style>
