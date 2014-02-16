---
layout: post
category : test
tags : [code, pygments, test]
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

## Ruby

{% highlight ruby linenos %}
def foo
  puts 'foo'
end
{% endhighlight %}