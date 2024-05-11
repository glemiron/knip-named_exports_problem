## Demo for knip exports problem

The issue created [here](https://github.com/webpro/knip/issues/626).
#### This is output of the tool for this set up
```
Unused exports (4)
FEATURE_ONE  FEATURES  unknown  src/features/constants.ts:1:14            
FEATURE_TWO  FEATURES  unknown  src/features/constants.ts:2:14            
order1                 unknown  src/fixures/orderFixtures/fixture1.ts:1:14
order2                 unknown  src/fixures/orderFixtures/fixture2.ts:1:14
```



#### Expected output
```
Unused exports (2)
FEATURE_TWO  FEATURES  unknown  src/features/constants.ts:2:14            
order2                 unknown  src/fixures/orderFixtures/fixture2.ts:1:14
```

I believe that there're two different use case, but with the same root cause
