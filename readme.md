#Usage

In component:

```
import {NANO_SCROLLER} from 'path/to/ng2-nanoscroller';

@Component({
    // ...
    directives: [NANO_SCROLLER]
    // ...
})
class MyComponent{}
```

In template

```
<div [nano]>
    <div [nanoContent]></div>
</div>
```