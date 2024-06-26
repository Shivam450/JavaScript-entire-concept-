var obj ={"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

var propertyPath = obj.person.address

function findNestedValue(obj, propertyPath) {
    const pathArray = propertyPath.split(".");
    let result = obj;
  
    for (let property of pathArray) {
      if (result && typeof result === "object" && property in result) {
        result = result[property];
      } else {
        return null;
      }
    }
  
    return result;
  }