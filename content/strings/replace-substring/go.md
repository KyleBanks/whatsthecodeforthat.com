```
import "strings"

// Replace all occurrences of 'old' using -1...
replaced := strings.Replace(s, old, new, -1)

// ... or specify a limit.
replaced := strings.Replace(s, old, new, 2)
```