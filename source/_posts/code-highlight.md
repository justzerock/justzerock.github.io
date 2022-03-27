---
title: Code Highlight Style test
abbrlink: 9db656e5
date: 2019-07-25 16:43:00
tags:
---

Make sure all the code blocks highlighted correctly. All the code samples are come from the demo of https://highlightjs.org

<!-- more -->

``` plain
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
```

```rust
#[derive(Debug)]
pub enum State {
    Start,
    Transient,
    Closed,
}

impl From<&'a str> for State {
    fn from(s: &'a str) -> Self {
        match s {
            "start" => State::Start,
            "closed" => State::Closed,
            _ => unreachable!(),
        }
    }
}
```

```json
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
```

```python
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```

```html
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
```

```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export $initHighlight;
```

```cpp
#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  char c = '\n';
  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\"; // this is an error

  return -2e3 + 12l;
}
```

```sql
CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
```

```objectivec
#import <UIKit/UIKit.h>
#import "Dependency.h"

@protocol WorldDataSource
@optional
- (NSString*)worldName;
@required
- (BOOL)allowsToLive;
@end

@property (nonatomic, readonly) NSString *title;
- (IBAction) show;
@end
```

```java
/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}
```

```swift
import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\(name) is \(age + offset) years old"
  }
}
```

```css
.example-gradient {
	background: -webkit-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Chrome10+, Safari5.1+ */
	background:    -moz-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* FF3.6+ */
	background:     -ms-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* IE10+ */
	background:      -o-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Opera 11.10+ */
	background:         linear-gradient(to right, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* W3C */
}
.example-angle {
	transform: rotate(10deg);
}
.example-color {
	color: rgba(255, 0, 0, 0.2);
	background: purple;
	border: 1px solid hsl(100, 70%, 40%);
}
.example-easing {
	transition-timing-function: linear;
}
.example-time {
	transition-duration: 3s;
}
```

```markup
<table bgcolor="#6E5494">
<tr style="background: lightblue;">
```

```less
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
	background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
	background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
	background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
	background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
	background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
}
@angle: 3rad;
.example-angle {
	transform: rotate(.4turn)
}
@nice-blue: #5B83AD;
.example-color {
	color: hsla(102, 53%, 42%, 0.4);
}
@easing: cubic-bezier(0.1, 0.3, 1, .4);
.example-easing {
	transition-timing-function: ease;
}
@time: 1s;
.example-time {
	transition-duration: 2s;
}
```

```sass
$gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%)
@mixin example-gradient
	background: -moz-radial-gradient(center, ellipse cover, #f2f6f8 0%, #d8e1e7 50%, #b5c6d0 51%, #e0eff9 100%)
	background: radial-gradient(ellipse at center, #f2f6f8 0%, #d8e1e7 50%, #b5c6d0 51%, #e0eff9 100%)
$angle: 380grad
@mixin example-angle
	transform: rotate(-120deg)
.example-angle
	transform: rotate(18rad)
$color: blue
@mixin example-color
	color: rgba(147, 32, 34, 0.8)
.example-color
	color: pink
$easing: ease-out
.example-easing
	transition-timing-function: ease-in-out
$time: 3s
@mixin example-time
	transition-duration: 800ms
.example-time
	transition-duration: 0.8s
```

```scss
$gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
$attr: background;
.example-gradient {
	#{$attr}-image: repeating-linear-gradient(10deg, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1) 10px, rgba(255, 0, 0, 0) 20px);
}
$angle: 1.8turn;
.example-angle {
	transform: rotate(-3rad)
}
$color: blue;
.example-color {
	#{$attr}-color: rgba(255, 255, 0, 0.75);
}
$easing: linear;
.example-easing {
	transition-timing-function: cubic-bezier(0.9, 0.1, .2, .4);
}
$time: 1s;
.example-time {
	transition-duration: 10s
}
```

```stylus
gradient = linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%)
.example-gradient
	background-image: repeating-radial-gradient(circle, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1) 10px, rgba(255, 0, 0, 0) 20px)
angle = 357deg
.example-angle
	transform: rotate(100grad)
color = olive
.example-color
	color: #000
easing = ease-in
.example-easing
	transition-timing-function: ease-out
time = 3s
.example-time
	transition-duration: 0.5s
```

```ruby
# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute
```

```makefile
# Makefile

BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
	@echo "Building main facility..."
	build_main $(BUILDDIR)

clean:
	rm -rf $(BUILDDIR)/*
```

```go
package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(`exitting now\`)
    go println(len("hello world!"))
    return
}
```

```bash
#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
  echo "Superuser rights required"
  exit 2
fi

genApacheConf(){
  echo -e "# Host ${HOME_DIR}$1/$2 :"
}
```

```ini
; boilerplate
[package]
name = "some_name"
authors = ["Author"]
description = "This is \
a description"

[[lib]]
name = ${NAME}
default = True
auto = no
counter = 1_000
```
