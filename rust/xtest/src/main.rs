mod vectorTest;
mod fileIO;
use vectorTest::*;
use fileIO::*;



fn main() {
    //1.for vector
    let mut nums = vec![5,2,4,7,5,3,4,6];
    nums.push(3);

    print!("{}\n",get_a(&mut nums));
    print!("{}\n",get_max(&mut nums));
    print!("{:?}",b_sort(&mut nums))
}
