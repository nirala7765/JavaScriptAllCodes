const munc = (arg) => {
    if (arg !== undefined && arg !== null) {
      return Object.keys(arg).map((objkey) => {
        return [...Array(arg[objkey])].map((orderItem, key) => {
          return { id: arg[objkey].id, name: arg[objkey].name };
        });
      }).reduce((acc, item) => {
        return acc.concat(item);
      }, []);
    } else {
      return null; // Return an appropriate value when arg is undefined or null
    }
  };
  