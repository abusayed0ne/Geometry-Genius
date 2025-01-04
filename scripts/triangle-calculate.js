function calculateTriangleArea(){
    // GET TRIANGLE BASE VALUE
    const TriangleBaseInput = document.getElementById("trainagle-base");
    const TriangleBaseValue = TriangleBaseInput.value;
    // Will print the value of input field including floating value as well
    const IntFloatCheck = parseFloat(TriangleBaseValue)
    // console.log(IntFloatCheck)
    // console.log(typeof(IntFloatCheck))
    // Just Integer Value will be printed
    const IntFloatCheck2 = parseInt(TriangleBaseValue) 
    // console.log(IntFloatCheck2)
    // console.log(typeof(IntFloatCheck2))

    // GET TRIANGLE HEIGHT VALUE
    const TriangleHeightInput = document.getElementById("triangle-height");
    const TriangleValue = TriangleHeightInput.value;
    const TurnIntoFloat = parseFloat(TriangleValue);
    console.log(TurnIntoFloat);
    console.log(typeof(TurnIntoFloat));
}
