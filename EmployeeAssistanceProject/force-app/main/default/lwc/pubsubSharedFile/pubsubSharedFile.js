var callbacks = {};




const register = (eventName, callback) => {

  if (!callbacks[eventName]) {

    callbacks[eventName] = new Set();

  }

  callbacks[eventName].add(callback);

};




const unregister = (eventName, callback) => {

  if (callbacks[eventName]) {

    callbacks[eventName].delete(callback);

    // ! delete the callback from callbacks variable

  }

};




const unregisterAll = () => {

  callbacks = {};

};




const fire = (eventName, payload) => {

  if (callbacks[eventName]) {

    callbacks[eventName].forEach((callback) => {

      try {

        callback(payload);

      } catch (error) {

        // fail silently

      }

    });

  }

};




export default {

  register,

  unregister,

  fire,

  unregisterAll

};