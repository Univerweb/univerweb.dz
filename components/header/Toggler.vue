<template>
  <button
    type="button"
    aria-label="Ouvrir le menu"
    class="toggler"
    @click.prevent="$store.commit('open')"
  >
    <span class="toggler-icon"></span>
  </button>
</template>

<style>
.toggler {
  background: transparent;
  width: 45px;
  height: 45px;
  margin: 0;
  padding: 10px;
  text-align: left;
  outline: none;
}

@media (min-width: 1024px) {
  .toggler {
    display: none;
  }
}

.toggler:focus {
  background: var(--dark-blue);
}

.opened .toggler:focus {
  background: var(--blue);
}

.toggler-icon {
  display: inline-block;
  vertical-align: middle;
}

.toggler-icon,
.toggler-icon:before,
.toggler-icon:after {
  background: var(--blue);
  height: 3px;
  border-radius: 3px;
  transition: all 0.3s;
}

.toggler-icon:before,
.toggler-icon:after {
  content: '';
  display: block;
}

.opened .toggler:focus .toggler-icon,
.opened .toggler:focus .toggler-icon:before,
.opened .toggler:focus .toggler-icon:after {
  background: var(--dark-blue);
}

@keyframes CollapseCenter {
  0% {
    width: 0;
  }
  75% {
    width: 0;
  }
  100% {
    width: 15px;
  }
}

.toggler-icon {
  animation: CollapseCenter 0.5s forwards;
}

@keyframes CollapseShowCenter {
  0% {
    width: 15px;
  }
  25% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

.opened .toggler .toggler-icon {
  animation: CollapseShowCenter 0.5s forwards;
}

@keyframes CollapseBefore {
  0% {
    transform: translateY(0) rotate(-45deg);
    width: 25px;
  }
  25% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-10px) rotate(0);
  }
  100% {
    transform: translateY(-10px) rotate(0);
    width: 25px;
  }
}

.toggler-icon:before {
  animation: CollapseBefore 0.5s forwards;
}

@keyframes CollapseShowBefore {
  0% {
    transform: translateY(-10px) rotate(0);
    width: 25px;
  }
  50% {
    transform: translateY(-10px) rotate(0);
  }
  75% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
    width: 25px;
  }
}

.opened .toggler-icon:before {
  animation: CollapseShowBefore 0.5s forwards;
}

@keyframes CollapseAfter {
  0% {
    transform: translateY(-3px) rotate(45deg);
    width: 25px;
  }
  25% {
    transform: translateY(-3px) rotate(0);
  }
  50% {
    transform: translateY(7px) rotate(0);
    width: 25px;
  }
  75% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
  100% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
}

.toggler-icon:after {
  animation: CollapseAfter 0.5s forwards;
}

@keyframes CollapseShowAfter {
  0% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
  25% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
  50% {
    transform: translateY(7px) rotate(0);
    width: 25px;
  }
  75% {
    transform: translateY(-3px) rotate(0);
  }
  100% {
    transform: translateY(-3px) rotate(45deg);
    width: 25px;
  }
}

.opened .toggler-icon:after {
  animation: CollapseShowAfter 0.5s forwards;
}
</style>
