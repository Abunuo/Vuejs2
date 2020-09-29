/*
  长按指令
  eg.  v-longpress="() => showAT(longPressData)"
 */

export const name = 'longpress';
export default {
  bind: (el, binding, vNode) => {
    // Make sure expression provided is a function
    if (typeof binding.value !== 'function') {
      // Fetch name of component
      const compName = vNode.context.name
      // pass warning to console
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) {
        warn += `Found in component '${compName}' `
      }

      console.warn(warn)
    }
    // Define variable
    let pressTimer = null

    // Define funtion handlers
    // Create timeout ( run function after 1s )
    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return;
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // Run function
          handler()
        }, 500)
      }
    }

    // Cancel Timeout
    let cancel = (e) => {
      // Check if timer has a value or not
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    // Run Function
    const handler = () => {
      binding.value()
    }

    // Add Event listeners
    el.addEventListener("mousedown", start, {
      passive: false
    });
    el.addEventListener("touchstart", start, {
      passive: false
    });
    // Cancel timeouts if this events happen
    el.addEventListener("click", cancel, {
      passive: false
    });
    el.addEventListener("mouseout", cancel, {
      passive: false
    });
    el.addEventListener("touchend", cancel, {
      passive: false
    });
    el.addEventListener("touchcancel", cancel, {
      passive: false
    });
  }
}