<template>
  <div id="app">


    <!-- https://itchief.ru/lessons/bootstrap-3/38-bootstrap-3-navigation-menu -->
    <!-- Классы navbar и navbar-default (базовые классы меню) -->
    <!-- <nav class="navbar-static-top | navbar-fixed-top"... - определяют поведение fixed - часть с меню всегда на экране при прокрутке странице -->
        <nav class="navbar navbar-default navbar-fixed-top">
            <!-- Контейнер (определяет ширину Navbar) -->
            <div class="container-fluid">
                <!-- Заголовок -->
                <div class="navbar-header">
                    <!-- Кнопка «Гамбургер» отображается только в мобильном виде (предназначена для открытия основного содержимого Navbar) -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-main">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Бренд или название сайта (отображается в левой части меню) -->
                    <!-- <a class="navbar-brand"> -->
                        <!-- <img src="navbar-brand.svg" height="36" alt="Brand name"> -->
                        <router-link class="navbar-brand" to='/'>Brand name</router-link>
                    <!-- </a> -->
                </div>
                <!-- Основная часть меню (может содержать ссылки, формы и другие элементы) -->
                <div class="collapse navbar-collapse" id="navbar-main">
                    <!-- Содержимое основной части -->
                    <ul class="nav navbar-nav">
                        <!-- <li class="active"><a href="#">Страница 1</a></li> -->
                        <li><router-link to='/'>Home</router-link></li>
                        <li><router-link to='/register'>Register</router-link></li>
                        <li><router-link to='/login'>Login</router-link></li>
                        <!-- <li><a href="#">Страница 3</a></li>
                        <li><a href="#">Страница 4</a></li>
                        <li><a href="#">Страница 5</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Раздел <span
                                    class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ссылка #1</a></li>
                                <li><a href="#">Ссылка #2</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Ссылка #3</a></li>
                                <li><a href="#">Ссылка #4</a></li>
                            </ul>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
<!-- 
	<nav>
		<router-link to='/'>Home&nbsp;</router-link>
		<router-link to='/register'>Register&nbsp;</router-link>
		<router-link to='/login'>Login&nbsp;</router-link>
	</nav> -->
	<router-view/>
<!--     <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir Next Cyr Medium', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
  margin-right: 60px;
}
</style>
