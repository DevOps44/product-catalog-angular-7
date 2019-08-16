
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpaces"
})

export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');  //replace any given character with a space
    }
}