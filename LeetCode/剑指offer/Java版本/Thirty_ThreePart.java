package 剑指offer;

import 剑指offer.PublicClass.TreeNode;

import java.util.ArrayList;
import java.util.List;

public class Thirty_ThreePart {

  List<List<Integer>> result = new ArrayList<>();

  /**
   * 面试题32 - III. 从上到下打印二叉树 III
   * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，
   * 第三行再按照从左到右的顺序打印，其他行以此类推。
   */
  public List<List<Integer>> levelOrder(TreeNode root) {
    cycle(root, 0);
    return result;
  }

  /**
   * 递归调用，这里采用奇偶层数来看是从左至右还是从右到左
   */
  public void cycle(TreeNode root, int depth) {
    if (root == null) {
      return;
    }
    if (result.size() - 1 >= depth) {
      List<Integer> list = result.get(depth);
      if (depth % 2 == 0) {
        list.add(root.val);
      } else {
        list.add(0, root.val);
      }
    } else {
      List<Integer> list = new ArrayList<>();
      list.add(root.val);
      result.add(list);
    }
    if (root.left != null)
      cycle(root.left, depth + 1);
    if (root.right != null)
      cycle(root.right, depth + 1);
  }

}
