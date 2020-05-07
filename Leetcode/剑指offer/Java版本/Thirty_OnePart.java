package 剑指offer;

import 剑指offer.PublicClass.TreeNode;

import java.util.*;
import java.util.concurrent.ArrayBlockingQueue;

/**
 * 源自《剑指Offer 第二版》面试题32 - I. 从上到下打印二叉树
 *    从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 */
public class Thirty_OnePart {

  public int[] levelOrder(TreeNode root) {
    if (root == null) {
      return new int[0];
    }
    List<Integer> result = new ArrayList<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    addQueue(queue, result);

    int[] arrayResult = new int[result.size()];
    int index = 0;
    for (Integer val : result) {
      arrayResult[index++] = val;
    }
    return arrayResult;
  }

  public void addQueue(Queue<TreeNode> queue, List<Integer> result) {
    if (queue.size() == 0) {
      return;
    }
    TreeNode firstVal = queue.poll();
    if (firstVal.left != null) {
      queue.add(firstVal.left);
    }
    if (firstVal.right != null) {
      queue.add(firstVal.right);
    }
    result.add(firstVal.val);
    addQueue(queue, result);
  }

}