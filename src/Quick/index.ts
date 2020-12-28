export class Quick {
  constructor(val: Array<number>) {
    console.log(val);
    this.sort(val);
  }

  sort(a: Array<number>): any {
      console.log(this.quickSort(a, 0, a.length - 1))
  }

  quickSort(items: Array<number>, left: number, right: number) {
    let index;
    if (items.length > 1) {
      index = this.partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        this.quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        this.quickSort(items, index, right);
      }
    }
    return items;
  }

  partition(items: Array<number>, left: number, right: number) {
    let pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++; // find from left els the one larger than pivot
      }
      while (items[j] > pivot) {
        // find from right els the one smaller than pivot
        j--;
      }
      if (i <= j) {
        // if left larger is still left to the right smaller
        [items[i], items[j]] = [items[j], items[i]]; //swap two elements
        i++;
        j--;
      }
    }
    return i;
  }
}
