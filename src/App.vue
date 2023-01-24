<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span style="font-size: 38px;" class="bi pe-none me-2">
              <i class="fa-brands fa-bootstrap"></i>
            </span>
            <span class="fs-5 d-none d-sm-inline">Sidebar</span>
          </a>
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
              <a href="#" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li>
              <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
              <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                <li class="w-100">
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
            </li>
            <li>
              <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
              <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                <li class="w-100">
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
              <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                <li class="w-100">
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
            </li>
          </ul>
          <hr>
          <div class="dropdown pb-4">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
              <span class="d-none d-sm-inline mx-1">loser</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col py-3">
        <h3>Left Sidebar with Submenus</h3>
        <p class="lead">
          An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a
          single
          menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width
          on smaller screens.</p>
        <ul class="list-unstyled">
          <li>
            <h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile
          </li>
        </ul>
      </div>
    </div>
  </div>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>

    <div class="column is-three-quarter conteudo">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral
  },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean): void {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<!-- <style>
.lista {
  padding: 1.5em;
}

main {
  --bg-primario: #ffffff;
  --texto-primario: #000000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #dddddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style> -->

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
