import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsComponent } from './solutions.component';
import { default as nonDivisibleSubsetTest14Data } from './nonDivisibleSubSet_test_14.json';
import { default as queenAttackTest18Data } from './queenAttack_test_18.json';
type TestDAta = {
  data: number[][];
};

describe('SolutionsComponent', () => {
  let component: SolutionsComponent;
  let fixture: ComponentFixture<SolutionsComponent>;

  function expectChair(n: number, m: number, s: number, expected: number) {
    expect(component.saveThePrisoner(n, m, s)).toEqual(expected);
  }

  function testCircularArrayRotation(a: number[], k: number, queries: number[], expected: number[]) {
    expect(component.circularArrayRotation(a, k, queries)).toEqual(expected);
  }
  function testJumpingOnClouds(c: number[], k: number, expected: number) {
    expect(component.jumpingOnClouds(c, k)).toEqual(expected);
  }
  function testCutTheSticks(arr: number[], expected: number[]) {
    expect(component.cutTheSticks(arr)).toEqual(expected);
  }
  function testNonDivisibleSubset(s: number[], k: number, expected: number) {
    expect(component.nonDivisibleSubset(k, s)).toEqual(expected);
  }
  function testEqualizeArray(arr: number[], expected: number) {
    expect(component.equalizeArray(arr)).toEqual(expected);
  }
  function testQueensAttack(n: number, r_q: number, c_q: number, obstacles: number[][], expected: number) {
    expect(component.queensAttackV2(n, obstacles.length, r_q, c_q, obstacles)).toEqual(expected);
  }
  function testAcmTeam(topic: string[], expected: number[]) {
    expect(component.acmTeam(topic)).toEqual(expected);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test saveThePrisoner s = 1, n = m, n = 1...100', () => {
    for (var i = 1; i <= 100; i++) {
      expectChair(i, i, 1, i);
    }
  });

  it('test saveThePrisoner s = 2, n = m, n = 2...100', () => {
    for (var i = 2; i <= 100; i++) {
      expectChair(i, i, 2, 1);
    }
  });

  it('test saveThePrisoner s = 3, m = n * 10, n = 3...100', () => {
    for (var i = 3; i <= 100; i++) {
      expectChair(i, i * 10, 3, 2);
    }
  });

  it('test saveThePrisoner m = n = 100, s = 2...100', () => {
    for (var i = 1; i < 100; i++) {
      expectChair(100, 100, i + 1, i);
    }
  });
  it('test saveThePrisoner m = 100, n = 50, s = 2...100', () => {
    for (var i = 1; i < 50; i++) {
      expectChair(50, 100, i + 1, i);
    }
  });
  it('test saveThePrisoner m = 101, n = 50, s = 1...100', () => {
    for (var i = 1; i <= 50; i++) {
      expectChair(50, 101, i, i);
    }
  });

  it('test saveThePrisoner HackerRank cases', () => {
    expectChair(999999999, 999983621, 2, 999983622);
    expectChair(1000000000, 999974157, 866502488, 866476644);
    expectChair(7, 19, 2, 6);
    expectChair(3, 7, 3, 3);
  });

  it('test circularArrayRotation a.length % k = 0', () => {
    for (var i = 1; i <= 10; i++) {
      var a: number[] = [];
      var expected: number[] = [];
      var q: number[] = [];

      for (var j = 1; j < i + 1; j++) {
        a.push(j);
        q.push(j - 1);
      }
      expected = a.slice(1);
      expected.push(a[0]);
      testCircularArrayRotation(a, 1, q, expected);
    }
  });

  it('test circularArrayRotation HackerRank cases', () => {
    testCircularArrayRotation([1, 2, 3], 2, [0, 1, 2], [2, 3, 1]);
  });
  it('test jumpingOnClouds HackerRank cases', () => {
    testJumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2, 92);
  });
  it('test cutTheSticks HackerRank cases', () => {
    testCutTheSticks([1, 2, 3], [3, 2, 1]);
    testCutTheSticks([5, 4, 4, 2, 2, 8], [6, 4, 2, 1]);
  });

  it('test nonDivisibleSubset HackerRank cases', () => {
    testNonDivisibleSubset([1, 7, 2, 4], 3, 3);
    testNonDivisibleSubset([278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436], 7, 11);
    testNonDivisibleSubset(nonDivisibleSubsetTest14Data.data, 2, 2);
  });

  it('test testEqualizeArray HackerRank cases', () => {
    testEqualizeArray([1, 7, 2, 4], 3);
    testEqualizeArray([3, 3, 2, 1, 3], 2);
    testEqualizeArray([1, 2, 3, 1, 2, 3, 3, 3], 4);
    testEqualizeArray([1, 2, 2, 3], 2);
    testEqualizeArray([1, 2, 2, 1], 2);
    testEqualizeArray([1, 2, 2, 1, 2], 2);
    testEqualizeArray([1, 2, 2, 3, 3], 3);
    testEqualizeArray([3], 0);
    testEqualizeArray([3, 3], 0);
    testEqualizeArray([46, 80, 18, 26, 60, 66, 24, 21, 60, 18, 14, 34, 72, 69,
      14, 8, 13, 24, 14, 81, 81, 24, 81, 21, 60, 34, 18, 44, 81, 8, 80, 75,
      100, 74, 100, 28, 100, 82, 81, 80, 13, 96, 69, 11, 11, 24, 60, 3, 14,
      13, 74, 96, 81, 8, 100, 28, 43, 60, 44, 8, 21, 11, 80, 3, 69, 4, 80, 28, 81, 11, 66], 64);
  });

  it('test queensAttack HackerRank cases', () => {
    testQueensAttack(4, 4, 4, new Array(0), 9);
    testQueensAttack(5, 4, 3, [[5, 5], [4, 2], [2, 3]], 10);
    testQueensAttack(1, 1, 1, new Array(0), 0);
    testQueensAttack(2, 1, 1, new Array(0), 3);
    testQueensAttack(8, 4, 4, [[3, 5]], 24);
    testQueensAttack(2, 1, 1, [[2, 2], [2, 3]], 2);
    testQueensAttack(2, 1, 1, [[3, 3], [1, 3]], 3);
    testQueensAttack(5, 1, 1, [[3, 3]], 9);
    testQueensAttack(5, 1, 1, [[4, 4]], 10);
    testQueensAttack(5, 1, 1, [[4, 3], [4, 3]], 12);
    testQueensAttack(5, 1, 1, [[0, 0]], 12);
    testQueensAttack(5, 5, 5, [[0, 0]], 12);
    testQueensAttack(5, 5, 5, [[1, 1]], 11);
    testQueensAttack(5, 1, 1, [[6, 6]], 12);
    testQueensAttack(100000, 2816, 9745, (<TestDAta>queenAttackTest18Data).data, 110198);
  });

  it('test acmTeam HackerRank cases', () => {
    testAcmTeam([""], []);
  });


});
