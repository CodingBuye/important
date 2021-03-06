use std::collections::HashMap;

/**
获取vector平均数
*/
pub(crate) fn get_a(v:&mut Vec<i32>) ->i32{
    let mut sum = 0;
    let mut i = 0;
    for num in v {
        sum += *num;
        i += 1;
    }
    sum/i
}

/**
获取vector众数
**/
pub(crate) fn get_max(v:&mut Vec<i32>) ->i32 {
    let mut map = HashMap::new();
    for num in v {
        let count = map.entry(*num).or_insert(0);
        *count += 1;

    }
    let mut max = 0;
    let mut res = 0;

    for (key,val) in map {
        if max < val {
            max = val;
            res = key;
        }
    }
    res
}


/**
冒泡排序vector
*/
pub(crate) fn b_sort(v: &mut Vec<i32>) -> &mut Vec<i32> {
    let len = v.len();

    let mut i = 0;

    while i < len-1 {
        let mut j = 0;
        while j < len-i-1 {
            if v[j] > v[j+1] {
                let tmp = v[j];
                v[j] = v[j+1];
                v[j+1] = tmp;
            }
            j += 1;
        }
        i += 1;
    }

    v

}