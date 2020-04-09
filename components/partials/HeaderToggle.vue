<template>
  <button
    type="button"
    :aria-label="$t('links.ariaLabel')"
    class="toggle"
    @click.prevent="open"
  >
    <span class="toggle-icon"></span>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions(['open'])
}
</script>

<style>
.toggle {
  background: transparent;
  width: 45px;
  height: 45px;
  margin: 0;
  padding: 10px;
  text-align: left;
  outline: none;
}

[dir='rtl'] .toggle {
  text-align: right;
}

@media (min-width: 1024px) {
  .toggle {
    display: none;
  }
}

.toggle:focus {
  background: var(--dark-blue);
}

.opened .toggle:focus {
  background: var(--blue);
}

.toggle-icon {
  display: inline-block;
  vertical-align: middle;
}

.toggle-icon,
.toggle-icon:before,
.toggle-icon:after {
  background: var(--blue);
  height: 3px;
  border-radius: 3px;
  transition: all 0.3s;
}

.toggle-icon:before,
.toggle-icon:after {
  content: '';
  display: block;
}

.opened .toggle:focus .toggle-icon,
.opened .toggle:focus .toggle-icon:before,
.opened .toggle:focus .toggle-icon:after {
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

.toggle-icon {
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

.opened .toggle .toggle-icon {
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

.toggle-icon:before {
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

.opened .toggle-icon:before {
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

.toggle-icon:after {
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

.opened .toggle-icon:after {
  animation: CollapseShowAfter 0.5s forwards;
}
</style>
