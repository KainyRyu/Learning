function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }



////////                         Move over event                      ///////
// $(document).ready(function(){
//     $( "#game" ).mouseenter(function(e) {
//       closestEdge(e, this);
//     });  
//   });
  
//   function moveDiv(mouse, edge, elem) {
//     const width = $(elem).outerWidth();
//     const height = $(elem).outerHeight();
    
//     switch (edge) {
//       case "left":
//         $(elem).css({
//             left: mouse.pageX + 10
//         });
//         break;
//       case "right":
//         $(elem).css({
//             left: mouse.pageX - width - 20
//         });
//         break;
//       case "top":
//         $(elem).css({
//             top: mouse.pageY + 10
//         });
// break;
// case "bottom":
//   $(elem).css({
//       top: mouse.pageY - height - 20
//   });
//   break;
// }
// }

// function closestEdge(mouse, elem) {
// let elemBounding = elem.getBoundingClientRect();

// let elementLeftEdge = elemBounding.left;
// let elementTopEdge = elemBounding.top;
// let elementRightEdge = elemBounding.right;
// let elementBottomEdge = elemBounding.bottom;

// let mouseX = mouse.pageX;
// let mouseY = mouse.pageY;

// let topEdgeDist = Math.abs(elementTopEdge - mouseY);
// let bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
// let leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
// let rightEdgeDist = Math.abs(elementRightEdge - mouseX);

// let min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);

// let position;

// switch (min) {
//   case leftEdgeDist:
//     position = "left";
//     break;
//   case rightEdgeDist:
//     position = "right";
//     break;
//   case topEdgeDist:
//     position = "top";
//     break;
//   case bottomEdgeDist:
//     position = "bottom";
//     break;
// }

// moveDiv(mouse, position, elem);
// }