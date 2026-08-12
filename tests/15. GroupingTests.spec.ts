import {test, expect} from '@playwright/test'

test.describe('HomePageTests',()=>{
    test('HomePageTitleTest', async({page})=>{
        console.log('This is Home Page Title Test')
    })
    test('HomePageHeadingTest', async({page})=>{
        console.log('This is Home Page Heading Test')
    
    })
   
})

test.describe('LoginTests',()=>{
    test('ValidLoginTest', async({page})=>{
        console.log('This is Valid Login Test')
    })
    test('InvalidLoginTest', async({page})=>{
        console.log('This is Invalid Login Test')
    
    })
   
})


// if only want to run one test write describe.only
// if want to skip write describe.skip
