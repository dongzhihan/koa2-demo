#Blockly Type Indicator

A indicator for google's visual programming framework [blockly](https://github.com/google/blockly) that shows where a currently dragged block can be attached.

![The type indicator](http://i.imgur.com/yflINvR.gif)

Colours can be changed by calling:
```
Blockly.Css.setTypeIndicatorColours(near, far, occupied)
```
Where near ist the colour for a connection in connecting range, far for all other type compatible connections that are not occupied and occupied for connections that are type compatible but occupied.

## Install with Bower

```
bower install --save blockly-type-indicator
```

## Add to HTML

Add `typeIndicator.js` to your `index.html` *after* all the other blockly scripts.

```
<script src="bower_components/blockly-type-indicator/typeIndicator.js"></script>
```
