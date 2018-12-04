function scratch(element)
{
  //Taille du curseur de grattage
  casesize = 5;

  var x = parseInt(element.offsetLeft);
  var y = parseInt(element.offsetTop);
  var width = parseInt(element.offsetWidth);
  var height = parseInt(element.offsetHeight);

  var table = document.createElement("table");
  table.style.borderSpacing = 0;
  table.style.border = 0;
  table.style.position = "absolute";
  table.style.width = width + "px";
  table.style.height = height + "px";
  table.style.left = x + "px";
  table.style.top = y + "px";
  table.style.cursor = "pointer";

  var cases = new Array(width);

  for(var tr = 0; tr < parseInt(height / casesize) + casesize; tr += casesize)
  {
    var row = document.createElement("tr");

    cases[tr] = new Array(width);

    for(var td = 0; td < parseInt(width / casesize) + casesize; td += casesize)
    {
      cases[tr][td] = document.createElement("td");
      cases[tr][td].style.padding = 0;
      cases[tr][td].style.width = casesize + "px";
      cases[tr][td].style.height = casesize + "px";
      cases[tr][td].style.borderSpacing = 0;
      cases[tr][td].style.backgroundColor = 'rgb(0, 98, 115)';

      addEvent(tr, td);

      row.appendChild(cases[tr][td]);
    }

    table.appendChild(row);
  }

  element.parentNode.appendChild(table);

  function addEvent(r, d)
  {
    cases[r][d].onmouseover = function()
    {
      this.style.backgroundColor = "transparent";

      for(var i = casesize * -1; i <= casesize; i += casesize)
        for(var j = casesize * -1; j <= casesize; j += casesize)
        {
          if(i * j == 0)
          {
            try{
              cases[r + j][d + i].style.backgroundColor = "transparent";
            }catch(e){}
          }
        }
    }
  }
}
