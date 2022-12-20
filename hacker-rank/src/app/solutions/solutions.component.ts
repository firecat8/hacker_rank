import { Component } from '@angular/core';
import { DIRECTIONS } from './enums';

@Component({
  selector: 'solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {



  /*
    number n: the number of prisoners
    number m: the number of sweets
    number s: the chair number to begin passing out sweets from
   */
  saveThePrisoner(n: number, m: number, s: number): number {
    if (m % n == 0)
      return s == 1 ? n : s - 1;
    if (m < n)
      return this.findChair(n, m, s);
    return this.findChair(n, m % n, s);
  }
  private findChair(n: number, m: number, s: number): number {
    var last = s + m - 1;
    return Math.abs(last <= n ? last : last - n);
  }

  /*
  number a[n]: the array to rotate
  number k: the rotation count
  number queries[1]: the indices to report
  */
  circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    var valuesByIndex: number[] = [];
    queries.forEach(i => {
      valuesByIndex.push(this.findValue(a, k, i));
    });
    return valuesByIndex;
  }
  private findValue(a: number[], k: number, i: number): number {
    var size = a.length;
    if (size == k)
      return a[i];
    if (size < k)
      return a[size % (i + k)];
    var d = size % k;
    return a[i + d < size ? i + d : size - (i + d)];
  }
  /**
   * If c[i] = 0, then cloud  is a cumulus cloud. 
   * If c[i] = 1, then cloud  is a thunderhead.
   * @param c the cloud types along the path
   * @param k the length of one jump
   * @returns left energy
   */
  jumpingOnClouds(c: number[], k: number): number {
    return this.jump(c, c.length, 0, k, 100);
  }
  private jump(c: number[], n: number, i: number, k: number, energy: number): number {
    var nextI = (i + k) % n;//next Cloud Index
    energy = energy - 1 - (c[nextI] == 1 ? 2 : 0);
    if (nextI == 0)
      return energy;
    return this.jump(c, c.length, nextI, k, energy);
  }
  /**
   * 
   * @param d1 returned date day
   * @param m1 returned month
   * @param y1 returned year
   * @param d2 due date day
   * @param m2 due month
   * @param y2 due year
   * @returns fine
   */
  libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
    if (y1 < y2)
      return 0;
    if (y1 > y2)
      return 10000;
    if (m1 > m2)
      return 500 * (m1 - m2);
    if (d1 > d2)
      return 15 * (d1 - d2);
    return 0;
  }/**
   * 
   * @param arr the lengths of each stick
   * @returns the number of sticks after each iteration
   */
  cutTheSticks(arr: number[]): number[] {
    var s: number[] = [];
    while (arr.length > 0) {
      var min = Math.min(...arr);
      s.push(arr.length);
      var biggerSticks = arr.filter(e => e > min);
      for (let i = 0; i < biggerSticks.length; i++) {
        arr[i] = arr[i] - min;
      }
      arr = biggerSticks;
    }
    return s;
  }
  /**
  * 
  * @param k the divisor
  * @param s an array of integers
  * @returns the length of the longest subset of S meeting the criteria
  */
  nonDivisibleSubset(k: number, s: number[]): number {
    var mappedNumberCountByRemainder = Array(k)
    mappedNumberCountByRemainder.fill(0);
    for (let i = 0; i < s.length; i++) {
      mappedNumberCountByRemainder[s[i] % k] += 1;
    }
    for (let i = 1; i < k / 2; i++) {
      var count1 = mappedNumberCountByRemainder[i];
      var count2 = mappedNumberCountByRemainder[k - i];
      if (count1 > count2)
        mappedNumberCountByRemainder[k - i] = 0;
      else
        mappedNumberCountByRemainder[i] = 0;
    }
    if (k % 2 == 0 && mappedNumberCountByRemainder[k / 2] > 1) {
      mappedNumberCountByRemainder[k / 2] = 1;
    }
    let maxSubsetCount = 0;
    for (let i = 1; i < k; i++) {
      maxSubsetCount += mappedNumberCountByRemainder[i];
    }
    if (mappedNumberCountByRemainder[0] > 0) {
      maxSubsetCount += 1;
    }
    return maxSubsetCount;
  }
  /**
   * 
   * @param arr an array of integers
   * @returns the minimum number of deletions required
   */
  equalizeArray(arr: number[]): number {
    var mappedNumberCountByNumber = new Array(101);
    mappedNumberCountByNumber.fill(0);
    for (let i = 0; i < arr.length; i++) {
      mappedNumberCountByNumber[arr[i]] += 1;
    }
    var maxCount = Math.max(...mappedNumberCountByNumber);
    return arr.length - maxCount;
  }
  /**
   * 
   * @param n the number of rows and columns in the board
   * @param k the number of obstacles on the board
   * @param r_q the row number of the queen's position
   * @param c_q the column number of the queen's position
   * @param obstacles each element is an array of 2 integers, the row and column of an obstacle
   * @returns the number of squares the queen can attack
   */
  queensAttack(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
    var squaresCount = 0;
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, 1, 0);// up
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, -1, 0);// down
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, 0, 1);// rght
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, 0, -1);// left
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, 1, -1);// left up diagonal
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, -1, -1);// left down diagonal
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, 1, 1);// right up diagonal
    squaresCount += this.countSquaresForAttack(n, r_q, c_q, obstacles, -1, 1);// right down diagonal
    return squaresCount;
  }
  private countSquaresForAttack(n: number, r_q: number, c_q: number, obstacles: number[][], r_d: number, c_d: number): number {
    var squaresCount = 0;
    var row = r_d + r_q;
    var col = c_d + c_q;
    if (row > n || col > n || row < 1 || col < 1)
      return squaresCount;
    var obstacle = obstacles.find(pos => pos[0] == row && pos[1] == col);
    while (obstacle == undefined && !(row > n || col > n || row < 1 || col < 1)) {
      squaresCount += 1;
      row += r_d;
      col += c_d;
      obstacle = obstacles.find(pos => pos[0] == row && pos[1] == col);
    }
    return squaresCount;
  }
  /**
   * 
   * @param n the number of rows and columns in the board
   * @param k the number of obstacles on the board
   * @param r_q the row number of the queen's position
   * @param c_q the column number of the queen's position
   * @param obstacles each element is an array of 2 integers, the row and column of an obstacle
   * @returns the number of squares the queen can attack
   */
  queensAttackV2(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
    var squaresCount = 0;
    var minDistances = [8];
    minDistances[DIRECTIONS.EAST] = n - c_q;
    minDistances[DIRECTIONS.WEST] = c_q - 1;
    minDistances[DIRECTIONS.NORTH] = n - r_q;
    minDistances[DIRECTIONS.SOUTH] = r_q - 1;
    var leftRowsDiff = r_q - 1 < 0 ? 0 : r_q - 1;
    var leftColsDiff = c_q - 1 < 0 ? 0 : c_q - 1;
    var rightRowsDiff = n - r_q;
    var rightColsDiff = n - c_q;
    minDistances[DIRECTIONS.NORTH_WEST] = rightRowsDiff >= leftColsDiff ? leftColsDiff : rightRowsDiff;
    minDistances[DIRECTIONS.SOUTH_WEST] = leftRowsDiff >= leftColsDiff ? leftColsDiff : leftRowsDiff;
    minDistances[DIRECTIONS.NORTH_EAST] = rightRowsDiff >= rightColsDiff ? rightColsDiff : rightRowsDiff;
    minDistances[DIRECTIONS.SOUTH_EAST] = leftRowsDiff >= rightColsDiff ? rightColsDiff : leftRowsDiff;
    //this.consoleResults(minDistances)
    for (let i = 0; i < k; i++) {
      const pos = obstacles[i];//obstacle position
      const row = pos[0];
      const column = pos[1];
      var rowSquares = Math.abs(row - r_q) - 1;
      var colSquares = Math.abs(column - c_q) - 1;
      if (row == r_q) {
        this.setMinDistance(minDistances, column > c_q ? DIRECTIONS.EAST : DIRECTIONS.WEST, colSquares);
        continue;
      }
      if (column == c_q) {
        this.setMinDistance(minDistances, row > r_q ? DIRECTIONS.NORTH : DIRECTIONS.SOUTH, rowSquares);
        continue;
      }
      if (Math.abs(row - r_q) != Math.abs(column - c_q))
        continue;// obstacle do not cross queen
      if (column < c_q) {
        this.setMinDistance(minDistances, row > r_q ? DIRECTIONS.NORTH_WEST : DIRECTIONS.SOUTH_WEST, rowSquares > colSquares ? colSquares : rowSquares);
        continue;
      }
      this.setMinDistance(minDistances, row > r_q ? DIRECTIONS.NORTH_EAST : DIRECTIONS.SOUTH_EAST, rowSquares > colSquares ? colSquares : rowSquares);
    }
    minDistances.forEach(min => squaresCount += min);
    //this.consoleResults(minDistances)
    return squaresCount;
  }
  private setMinDistance(minDistances: number[], i: number, distance: number) {
    if (minDistances[i] < distance)
      return;
    minDistances[i] = distance;
  }
  private consoleResults(minDistances: number[]) {
    console.log(DIRECTIONS[DIRECTIONS.NORTH] + " = " + minDistances[DIRECTIONS.NORTH]);
    console.log(DIRECTIONS[DIRECTIONS.NORTH_EAST] + " = " + minDistances[DIRECTIONS.NORTH_EAST]);
    console.log(DIRECTIONS[DIRECTIONS.EAST] + " = " + minDistances[DIRECTIONS.EAST]);
    console.log(DIRECTIONS[DIRECTIONS.SOUTH_EAST] + " = " + minDistances[DIRECTIONS.SOUTH_EAST]);
    console.log(DIRECTIONS[DIRECTIONS.SOUTH] + " = " + minDistances[DIRECTIONS.SOUTH]);
    console.log(DIRECTIONS[DIRECTIONS.SOUTH_WEST] + " = " + minDistances[DIRECTIONS.SOUTH_WEST]);
    console.log(DIRECTIONS[DIRECTIONS.WEST] + " = " + minDistances[DIRECTIONS.WEST]);
    console.log(DIRECTIONS[DIRECTIONS.NORTH_WEST] + " = " + minDistances[DIRECTIONS.NORTH_WEST]);
  }
  /**
   * ACM ICPC Team
   * @param topic a string of binary digits
   * @returns the maximum topics and the number of teams that know that many topics
   */
  acmTeam(topic: string[]): number[] {
    var membersKnowledge: number[][] = [];
    for (let i = 0; i < topic.length; i++) {
      var topicDigits = topic[i];
      membersKnowledge.push([]);
      for (let j = 0; j < topicDigits.length; j++) {
        membersKnowledge[i].push(parseInt(topicDigits.charAt(j), 10));
      }
    }
    var teams = [];
    for (let i = 0; i < membersKnowledge.length; i++) {
      const firstMemberKnowledge = membersKnowledge[i];
      for (let j = i + 1; j < membersKnowledge.length; j++) {
        const secondMemberKnowledge = membersKnowledge[j];
        var knowledge = 0
        for (let k = 0; k < firstMemberKnowledge.length; k++) {
          knowledge += firstMemberKnowledge[k] == 0 && secondMemberKnowledge[k] == 0 ? 0 : 1;
        }
        teams.push(knowledge);
      }
    }
    var maxTopics = Math.max(...teams);
    var count = teams.filter(teamTopicsCount => teamTopicsCount == maxTopics).length;
    return [maxTopics, count];
  }
  /**
   * Taum and B'day
   * @param b  the number of black gifts
   * @param w  the number of white gifts
   * @param bc the cost of a black gift
   * @param wc the cost of a white gift
   * @param z  the cost to convert one color gift to the other color
   * @returns the minimum cost to purchase the gifts
   */
  taumBday(b: number, w: number, bc: number, wc: number, z: number): number {
    if (bc == wc)
      return (b * bc + w * wc);
    if (bc > wc + z)
      return (b * (wc + z) + w * wc);
    if (bc + z < wc)
      return (b * bc + w * (bc + z));
    return (b * bc + w * wc);

  }
  kaprekarNumbers(p: number, q: number): string[] {
    var kaprekarNumbers: string[] = [];
    for (var i = p; i <= q; i++) {
      var d = Number((i).toString().length);
      var res = (i * i).toString();
      var number1 = Number(res.substring(0, res.length - d)).valueOf();
      var number2 = Number(res.substring(res.length - d)).valueOf();
      if (number1 + number2 == i)
        kaprekarNumbers.push((i).toString());
    }
    if (kaprekarNumbers.length == 0)
      kaprekarNumbers.push("INVALID RANGE");
    return kaprekarNumbers;
  }
  beautifulTriplets(d: number, arr: number[]): number {
    var beauTripletsCount = 0;
    for (let i = 0; i < arr.length; i++) {
      const first = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        const second = arr[j];
        var firstRes = second - first;
        if (firstRes != d)
          continue;
        for (let k = j + 1; k < arr.length; k++) {
          const third = arr[k];
          var secondRes = third - second;
          if (secondRes != d)
            continue;
          beauTripletsCount++;
        }
      }
    }
    return beauTripletsCount;

  }
  /**
   * 
   * @param a an array of integers
   * @returns the minimum distance found or -1 if there are no matching elements
   */
  minimumDistances(a: number[]): number {
    var max = Math.max(...a);
    var minimumDistances = new Array(max + 1);
    minimumDistances.fill(100001);
    for (let i = 0; i < a.length; i++) {
      const num = a[i];
      for (let j = i + 1; j < a.length; j++) {
        const num2 = a[j];
        if (num2 != num)
          continue;
        var distance = j - i;
        var minDistance = minimumDistances[num];
        if (distance < minDistance)
          minimumDistances[num] = distance;
      }
    }
    var min = Math.min(...minimumDistances);
    return min == 100001 ? -1 : min;
  }
  /**
   * Halloween Sale
   * @param p the price of the first game
   * @param d the discount from the previous game price
   * @param m the minimum cost of a game
   * @param s the starting budget
   * @returns max games which you can buy
   */
  howManyGames(p: number, d: number, m: number, s: number): number {
    var count = 0;
    s -= p;
    if (s >= 0)
      count += 1;
    var left = p;
    while (s >= m) {
      s -= (left - d > m ? (left -= d) : m);
      if (s >= 0)
        count += 1;
    }
    return count;
  }
  numbersAsString = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
  ]
  /**
   * The Time in Words
   * @param h the hour of the day
   * @param m the minutes after the hour
   * @returns a time string as described
   */
  timeInWords(h: number, m: number): string {
    if (m == 0)
      return this.numbersAsString[h - 1] + " o' clock";
    if (m == 30)
      return "half past " + this.numbersAsString[h - 1];
    var toOrPastAsString = "to";
    if (m < 30) {
      toOrPastAsString = "past";
      h -= 1;
    }
    if (toOrPastAsString == "to" && h == 12)
      h = 0;
    if (m == 15 || m == 45)
      return "quarter " + toOrPastAsString + " " + this.numbersAsString[h];
    if (m < 30)
      return this.minuteInWords(m) + toOrPastAsString + " " + this.numbersAsString[h];
    return this.minuteInWords(60 - m) + toOrPastAsString + " " + this.numbersAsString[h];
  }
  private minuteInWords(m: number): string {
    if (m == 1)
      return "one minute ";
    if (m < 20)
      return this.numbersAsString[m - 1] + " minutes ";
    return this.numbersAsString[20 - 1] + " " + this.numbersAsString[m - 20 - 1] + " minutes ";
  }
  /**
   * Flatland Space Stations
   * @param citiesCount the number of cities
   * @param citiesIndexes the indices of cities with a space station
   * @returns the maximum distance any city is from a space station
   */
  flatlandSpaceStations(citiesCount: number, citiesIndexes: number[]): number {
    if (citiesCount == citiesIndexes.length)
      return 0;
    var distances = new Array(citiesCount);
    distances.fill(0);
    citiesIndexes.sort((a, b) => a - b);
    var firstCityIndex = citiesIndexes[0];
    if (firstCityIndex > 0)
      distances[0] = firstCityIndex;
    for (let i = 0; i < citiesIndexes.length - 1; i++) {
      const cityIndex1 = citiesIndexes[i];
      const cityIndex2 = citiesIndexes[i + 1];
      const citiesDistance = cityIndex2 - cityIndex1;
      if (citiesDistance == 1)
        continue;//there is no other city or cities between them
      var middleCityMinDistance = Math.round(citiesDistance / 2);
      distances[cityIndex2 - middleCityMinDistance] = middleCityMinDistance - citiesDistance % 2;
    }
    var lastCityIndex = citiesIndexes[citiesIndexes.length - 1];
    if (lastCityIndex < citiesCount - 1)
      distances[citiesCount - 1] = citiesCount - 1 - lastCityIndex;
    return Math.max(...distances);
  }
  /**
   * Two Characters
   * @param s  a string
   * @returns the length of the longest valid string, or 0 if there are none
   */
  alternate(s: string): number {
    var chars = this.findCharactes(s);
    var charsCountForRemoving = chars.length - 2;
    var charsForRemoving = [];
    var longestCount = 0;
    console.log("\n\n s = " + s);
    console.log(chars)
    for (let i = 0; i + charsCountForRemoving - 1 < chars.length; i++) {
      console.log(" i = " + i + " " + chars[i])
      for (var j = i + 1; j + charsCountForRemoving - 2 < chars.length; j++) {
        charsForRemoving = [];
        for (var c = 0; c < charsCountForRemoving - 1; c++) {
          charsForRemoving.push(chars[j + c]);
        }
        if (charsForRemoving.length == 0)
          continue;
        charsForRemoving.push(chars[i]);
        console.log("Removing chars = " + charsForRemoving)
        var stringCopy = s.substring(0);
        var leftString = stringCopy.split(new RegExp("[" + charsForRemoving.join("|") + "]+")).join("");
        var leftChars = this.findCharactes(leftString);
        console.log(leftChars)
        console.log(leftString + "\n\n")
        try {
          if (!leftString.match(new RegExp("((?:" + leftChars[0] + "{2,})|(?:" + leftChars[1] + "{2,}))+"))) {
            console.log(leftString + "\n\n")
            longestCount = longestCount > leftString.length ? longestCount : leftString.length;
          }
        } catch (ex) {
          // console.log("\n\n")
          // console.log(ex)
          // console.log("\n\n")
        }
      }
    }
    return longestCount;
  }
  private findCharactes(string: string): any[] {
    var charsSet = new Set<any>()
    for (let i = 0; i < string.length; i++) {
      charsSet.add(string.charAt(i));
    }
    return [...charsSet];
  }
  /**
   * 
   * @param money  the amount of money they have to spend
   * @param cost the cost of each flavor of ice cream
   * @returns the indices of the prices of the two flavors they buy, sorted ascending
   */
  icecreamParlor(money: number, cost: number[]): number[] {
    var i = 0, j = 1;
    for (; i < cost.length; i++) {
      j = i + 1;
      for (; j < cost.length; j++) {
        if (cost[i] + cost[j] == money) {
          break;
        }
      }
      if (cost[i] + cost[j] == money) {
        break;
      }
    }
    return [i + 1, j + 1];
  }
  /**
   * Dynamic Array
   * @param n the number of empty arrays to initialize in arr
   * @param queries query strings that contain 3 space-separated integers
   * @returns he results of each type 2 query in the order they are presented
   */
  dynamicArray(n: number, queries: number[][]): number[] {
    var arr=[1,2,3]
    arr.shift()
    return []
  }

}
