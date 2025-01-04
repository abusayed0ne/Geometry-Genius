function calculateTriangleArea(){
    // GET TRIANGLE BASE VALUE
    const TriangleBaseInput = document.getElementById("trainagle-base");
    const TriangleBaseValue = TriangleBaseInput.value;
    // Will print the value of input field including floating value as well
    const Base = parseFloat(TriangleBaseValue)
    console.log(Base)
    // console.log(typeof(IntFloatCheck))
    // Just Integer Value will be printed
    // const IntFloatCheck2 = parseInt(TriangleBaseValue) 
    // console.log(IntFloatCheck2)
    // console.log(typeof(IntFloatCheck2))

    // GET TRIANGLE HEIGHT VALUE
    const TriangleHeightInput = document.getElementById("triangle-height");
    const TriangleValue = TriangleHeightInput.value;
    const Height = parseFloat(TriangleValue);
    console.log(Height);
    // console.log(typeof(TurnIntoFloat));

    // Area Calculation 
    Area = 0.5 * Base * Height ;
    console.log("Area of the Triangle is: ", Area);

    // Triangle Area Calculation 
    const TriangleArea = document.getElementById("TriangleAreaSpan");
    TriangleArea.innerText = Area;
}
