export const TEST_TYPE = 'Test';

//let ENUM_TYPE = 'Enum';
//let CATEGORY_TYPE = 'Category';
let USER_TYPE = 'User';

//if (process.env.NODE_ENV === 'test') {
//  ENUM_TYPE = 'Enum';
//  CATEGORY_TYPE = 'Category';
//  USER_TYPE = 'User';
//} else {
//
//}

function generateTypes(env) {
  return env === 'test' ?
  {
    ENUM_TYPE: 'ENUM_TEST',
    CATEGORY_TYPE: 'Category_TEST'
  } :
  {
    ENUM_TYPE: 'ENUM',
    CATEGORY_TYPE: 'Category'
  }
}

console.log('FILE IMPORTED'); // TODO: REMOVE CONSOLE LOG



//export const { ENUM_TYPE, CATEGORY_TYPE } = generateTypes('test');