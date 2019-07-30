import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, ext: any): any 
  {
    // console.log(value);
    // console.log(ext);
    
    return `${value}/portrait_uncanny.${ext}`;
  }

}
