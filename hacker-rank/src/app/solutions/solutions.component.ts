import { collectExternalReferences } from '@angular/compiler';
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
    console.log("\n")
    for (let i = 0; i < k; i++) {
      const pos = obstacles[i];//obstacle position
      const row = pos[0];
      const column = pos[1];
      console.log(" row = " + row + " c = " + column);
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
    var membersCount = topic.length;
    return [];
  }
}
