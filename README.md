# React
- lib (react)
  - react router dom
  - axios
  - generate-id
  - slider-image
  - validate
- framework (angular, vue)
- SPA (single page app)
- MPA (multiplate page app)

## Component
- pure/stateless/presentation component 
- stateful/container component

## How many way component re-render?
- state changes
- props changes
- parent component render -> child component render
- key changes (force update)
  - integrate with component 3rd libs

## How to fix conflict
### fix conflict when merge taskB into development branch
1. $git checkout taskB
2. $git checkout -b fc-taskB
3. $git merge --no-ff development
4. fix conflict 
5. create MR/PR of fc-taskB merge into development