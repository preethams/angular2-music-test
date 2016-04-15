import {Pipe} from 'angular2/core';

@Pipe({
    name: "search"
})

export class SearchPipe {
    transform(value, args) {
        if (!args[0])
            return value;
        return value.filter((item)=>item.name.toLowerCase().startsWith(args[0].toLowerCase()));
    }
}