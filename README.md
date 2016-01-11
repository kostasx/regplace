# regplace
JavaScript RegExp Replace for String Objects (Perl inspired)

`
<STRING>.regplace(PATTERN)(REPLACE, FLAGS)
`

> NOTICE: You'll need a double backslash for the escape character: \\\w

# Examples
```
"Some Other".regplace("some")("Someone", "i");        // Someone Other
"Some Other".regplace("o")("*", "ig");                // S*me *ther
"John Smith".regplace("(\\w+)\\s(\\w+)")('$2, $1');   // "Smith, John"
```
