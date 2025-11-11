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

## step to step when do task with git workflow
Scenario: task A
1. $git checkout main
2. $git pull
3. $git checkout -b taskA
4. $git add .
5. $git commit -m "xxxx"
6. $git push
7. create 1 MR(merge request)/PR(pull request) on github merge to development and qc branch
8. wait member review and merge  (into development or qc branch)
9. merge into main/master branch
  9.1. git checkout main/master branch
  9.2. git pull (get latested code)
  9.3. git checkout taskA
  9.4. git pull --rebase origin main/master
    9.4.1. if has conflict
      9.4.1.1. fix conflict
      9.4.1.2. git rebase --continue
      9.4.1.3. git push -f
    9.4.2. else
      9.4.2.1. git push -f

## How to fix conflict
### fix conflict when merge taskB into development branch
1. $git checkout taskB
2. $git checkout -b fc-taskB
3. $git merge --no-ff development
4. fix conflict 
5. create MR/PR of fc-taskB merge into development
### fix conflict when merge taskB into main branch
1. $git checkout main
2. $git pull - make sure get latest code of main
3. $git checkout taskB
4. $git pull --rebase origin main
5. fix conflict -> git add . -> git rebase --continue
6. git push -f
7. create MR/PR of fc-taskB merge into development

# Optimize performance web
## google lighthouse
- FCP - first contentful
- LCP - largest contentful
- CLS - cumulative layout shift

## optimize performance react
- prevent component render unnecessary
- lazy load component
- code splitting
