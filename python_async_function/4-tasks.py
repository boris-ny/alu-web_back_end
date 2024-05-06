#!/usr/bin/env python3
"""4 Tasks"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait(n: int, max_delay: int) -> List[float]:
    """run wait_random n times using task_wait_random"""
    tasks = [task_wait_random((max_delay)) for i in range(n)]
    return [await task for task in asyncio.as_completed(tasks)]
