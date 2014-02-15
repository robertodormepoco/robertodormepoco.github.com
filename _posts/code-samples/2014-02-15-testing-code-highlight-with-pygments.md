---
layout: post
category : test
tags : [code, jekyll, pygments]
---
{% include JB/setup %}

## PHP

{% highlight php %}
<?php

class Test
{
    protected $x;

    protected $y;

    public function __construct($x, $y) {
        $this->x = $x;
        $this->y = $y;
    }
}

{% endhighlight %}
