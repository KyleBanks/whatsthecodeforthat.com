```
/**
 * The *array* type is of fixed length and cannot be appended 
 * to without first creating a copy with an increased length. 
 * Instead, you can use a `List` or `Set` type such as 
 * `ArrayList` or `HashSet`, in conjunction with the `add` 
 * method, like so:
 */

import java.util.ArrayList;
import java.util.List;

List<Type> list = new ArrayList<Type>();
list.add(val);
```