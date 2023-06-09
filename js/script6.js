
let x=10;

{
    let x=20;
    {
        let x=30;
        {
            {
                {

                }
            }

        }
        console.log('level3 x ->',x);
    }
    console.log('level2 x -> ',x);
}

console.log('Level 1 x ->',x);