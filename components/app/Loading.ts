import { defineComponent, h } from 'vue'
import { useLoadingIndicator } from '#app/composables/loading-indicator'

export default defineComponent({
  name: 'AppLoading',
  props: {
    throttle: {
      type: Number,
      default: 200,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    height: {
      type: Number,
      default: 3,
    },
    color: {
      type: [String, Boolean],
      default: 'repeating-linear-gradient(to right, #50c8f0 0%, #28285a 50%, #50c8f0 100%)',
    },
    estimatedProgress: {
      type: Function as unknown as () => (duration: number, elapsed: number) => number,
      required: false,
    },
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress,
    })

    expose({
      progress,
      isLoading,
      start,
      finish,
      clear,
    })

    return () => h('div', {
      style: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: 'none',
        width: 'auto',
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: props.color || undefined,
        backgroundSize: progress.value === 0 ? 'auto' : `${(100 / progress.value) * 100}% auto`,
        transform: `scaleX(${progress.value / 100})`,
        transformOrigin: 'left',
        transition: 'transform 0.1s, height 0.4s, opacity 0.4s',
        zIndex: 999999,
      },
    }, slots)
  },
})
